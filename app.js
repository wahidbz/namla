document.addEventListener('DOMContentLoaded',()=>{
  const app=document.getElementById('app');
  const posts=[
    {id:1,user:"Alice",text:"Support Human Rights! 🌍",likes:12,comments:4,video:"assets/videos/sample1.mp4"},
    {id:2,user:"Bob",text:"Clean Water Initiative 💧",likes:8,comments:2,video:"assets/videos/sample2.mp4"},
    {id:3,user:"Carol",text:"Climate Action Now! 🌱",likes:15,comments:5,video:"assets/videos/sample3.mp4"},
    {id:4,user:"Dave",text:"Join local literacy program 📚",likes:5,comments:1,video:"assets/videos/sample4.mp4"},
    {id:5,user:"Eve",text:"Protect endangered species 🐘",likes:9,comments:3,video:"assets/videos/sample5.mp4"}
  ];
  function renderPosts(){
    app.innerHTML="<h1>Namla Feed</h1>";
    posts.forEach(p=>{
      app.innerHTML+=\`<div class="card"><strong>\${p.user}</strong><p>\${p.text}</p>\`+
                     \`<video class="post-video" src="\${p.video}" controls></video>\`+
                     \`<br><button onclick="likePost(\${p.id})">Like (\${p.likes})</button> \`+
                     \`<button onclick="commentPost(\${p.id})">Comment (\${p.comments})</button></div>\`;
    });
  }
  renderPosts();
  window.likePost=id=>{posts.find(p=>p.id===id).likes++;renderPosts();};
  window.commentPost=id=>{posts.find(p=>p.id===id).comments++;alert("Comment added (simulation)");};
});
