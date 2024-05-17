let me = "Ramin";
let array = ["Sahib", "Fidan", "Elvin"];
let list = document.querySelector("#list");
let chat = document.querySelector("#chat");

array.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = `<button onclick="fetchToChat('${item}')">${item}</button>`;
  list.appendChild(li);
});

function downloadFile(path) {
  console.log(path);
  fetch(`http://localhost:3000/download?nameoffile=${path}`);
}

function fetchToChat(item) {
  let socket = io();
  socket.emit("join chat", { userfirst: me, usersecond: item });
  socket.emit("read chat", { userfirst: me, usersecond: item });

  socket.on("chat history", function (history) {
    console.log(history);
    messagesList.innerHTML = "";
    history.forEach(function (msg) {
      showChat(msg);
    });
  });

  chat.innerHTML = `
                   <ul id="messages"></ul>
                   <div  class="message-arrea">
                   <div  class="message-forms">
                   <form id="form1" action="">
                     <input id="m1" autocomplete="off" /><button>Отправить ${item}</button>
                   </form>
                   <form id="form2" action="">
                     <input id="m2" autocomplete="off" /><button>Отправить ${me}</button>
                   </form>
                   </div>
                   <div  class="uploads-forms">
                   <form id="uploadFormPhotos">
                    <input type="file" id="photos" name="photos" multiple>
                    <button type="submit">Upload Images</button>
                    </form>
                    <form id="uploadFormFile">
                    <input type="file" id="file" name="file">
                    <button type="submit">Upload File</button>
                    </form>
                    </div>
                    
                   </div>
                   `;
  let messagesList = document.querySelector("#messages");

  function showChat(msg) {
    console.log(msg);
    let ul = document.createElement("ul");
    if (msg.photos.length !== 0) {
      msg.photos.forEach((base64Photo) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        li.appendChild(img);
        img.src = "data:image/jpeg;base64," + base64Photo;
        img.alt = "Photo ";
        img.width = 100; // Adjust the size as needed
        ul.appendChild(li);
      });
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `<span>${msg.message}</span><span>${msg.fromuser}</span>`;
    if (msg.fromuser === me) {
      listItem.classList.add("from-messages");
    } else if (msg.fromuser !== me) {
      listItem.classList.add("to-messages");
    }

    if (msg.nameoffile) {
      console.log("ok");
      let a = document.createElement("button");
      a.innerHTML = `<a href="http://localhost:3000/upload-folder/${msg.nameoffile}" onclick="f('${msg.nameoffile}')">${msg.nameoffile}</a>`;
      listItem.appendChild(a);
    }

    messagesList.appendChild(listItem);
    if (msg.photos.length > 0) {
      listItem.appendChild(ul);
    }
  }

  const filesArray = [];
  let uploadFile = {};

  document
    .getElementById("uploadFormPhotos")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const files = document.getElementById("photos").files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          filesArray.push(e.target.result.split(",")[1]);
        };

        reader.readAsDataURL(file);
      }
    });

  document
    .getElementById("uploadFormFile")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const files = document.getElementById("file").files;

      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        uploadFile = {
          nameoffile: file.name,
          file: e.target.result.split(",")[1],
        };
      };

      reader.readAsDataURL(file);
    });

  document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let messageInput = document.getElementById("m1");
    let message = messageInput.value;
    let obj = {
      message: message,
      fromuser: item,
      userfirst: me,
      usersecond: item,
      photos: filesArray,
      file: uploadFile,
      nameoffile: uploadFile.nameOfPhoto,
    };
    console.log(obj);

    message.trim();
    socket.emit("chat message", obj);
    showChat(obj);
    messageInput.value = "";
  });

  document.getElementById("form2").addEventListener("submit", function (event) {
    event.preventDefault();
    let messageInput = document.getElementById("m2");
    let message = messageInput.value;
    let obj = {
      message: message,
      fromuser: me,
      userfirst: me,
      usersecond: item,
      photos: filesArray,
      file: uploadFile,
      nameoffile: uploadFile.nameOfPhoto,
    };
    console.log(obj);
    socket.emit("chat message", obj);
    showChat(obj);
    messageInput.value = "";
  });
}
