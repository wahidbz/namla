console.log('Global Campaign Counters');
if(!localStorage.getItem('campaigns')){
  localStorage.setItem('campaigns',JSON.stringify({
    water:25,climate:40,humanrights:50,literacy:30,wildlife:35
  }));
}
function showCampaigns(){
  const campaigns=JSON.parse(localStorage.getItem('campaigns'));
  let list="Active Campaigns:\n";
  for(let key in campaigns){
    list+=key+" : "+campaigns[key]+" supporters\n";
  }
  alert(list);
}
