console.log('Messaging Module');
if(!localStorage.getItem('messages')){
  const fakeMessages=[
    {from:"Alice",to:"Bob",text:"Hey Bob! Check out the new campaign."},
    {from:"Bob",to:"Alice",text:"Thanks Alice! I'm joining it."},
    {from:"Carol",to:"Dave",text:"Have you seen this environmental post?"},
    {from:"Eve",to:"Alice",text:"Good initiative!"},
    {from:"Dave",to:"Bob",text:"Let's collaborate on literacy."},
    {from:"Alice",to:"Carol",text:"Shared your post on social media!"}
  ];
  localStorage.setItem('messages',JSON.stringify(fakeMessages));
}
function showMessages(user){
  const msgs=JSON.parse(localStorage.getItem('messages')).filter(m=>m.from===user || m.to===user);
  let list="Messages for "+user+":\n";
  msgs.forEach(m=>{list+=\`\${m.from} -> \${m.to}: \${m.text}\n\`;});
  alert(list);
}
