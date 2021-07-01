function get_achievement(x,y,z){
    let sum = x+y+z,ans;
    if(sum > 250){
      ans =  'A';
    }else if(sum >= 200){
        ans = 'B'
    }else if(sum >= 100){
        ans = 'C'
    }else{
        ans = 'D'
    }
    return ans;
  }

  console.log(get_achievement(60,100,40));