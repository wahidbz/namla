console.log('Communities Module');
if(!localStorage.getItem('communities')){
  localStorage.setItem('communities',JSON.stringify([
    {name:"Green Activists",members:120},
    {name:"Clean Water Group",members:80},
    {name:"Human Rights Watchers",members:150},
    {name:"Literacy Volunteers",members:60},
    {name:"Wildlife Protectors",members:90}
  ]));
}
function showCommunities(){
  const comms=JSON.parse(localStorage.getItem('communities'));
  let list="Communities:\n";
  comms.forEach(c=>{list+=\`\${c.name} (\${c.members} members)\n\`;});
  alert(list);
}
