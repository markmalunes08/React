import * as axios from 'axios';
export function action()
{ 
    let res =[]
    var Letters
    console.log("return");
    return  axios.get(`Library.json`).then(res => {
      Letters = res.data;
     console.log(res.data);
     console.log(typeof(res.data));
     return Letters;
    });
    
    
}
export function DisplayData(lengthval,checkedpassword,obj)
{
var RemPassword="";
//Getting each character from password to identify its type for displaying of JSON import values
for(let i=0;i<=lengthval;i++)
{
    if(isNaN(checkedpassword.charAt(i))==false)
    { 
        RemPassword+=checkedpassword.charAt(i);   
    }
   else if(RegExp(/[-!$%^&*()_#@+|~=`{}\[\]:";'<>?,.\/]/gi).test(checkedpassword.charAt(i)))    
    {
        RemPassword+=checkedpassword.charAt(i);
    }
    else if(isNaN(checkedpassword.charAt(i))==true)
    {   
        RemPassword+=obj[checkedpassword.charAt(i)];   
    }  
}

return RemPassword;
}


