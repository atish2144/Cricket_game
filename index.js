let Input1 = document.getElementById("input1");
let Input2 = document.getElementById("input2");
let Cb1=document.getElementById("cbx1")
let Cb2=document.getElementById("cbx2")
let TableValue=document.getElementById("table-value")
let NoTaleValue=document.getElementById("No-table-value")
let Cbval;
let arr = [];
display(arr)

let ls=JSON.parse(localStorage.getItem("arr"))

if(ls)
{
  arr=ls
  display(arr)
}

// let obj = {
//   player_name: Input1.value,
//   age: Input2.value,
//   type: x.value,
// };

//  let arr = [];

// function addPlayer() {
//   arr.push(obj);
//   console.log(arr);
//   console.log(Input1.value);
//   console.log(Input2.value);
// Input1.value = "";
// Input2.value = "";
// }



function addPlayer() 
{

  if(Cb2.checked && Cb1.checked)
  {
    Cbval="Batsman , Bowler"
  }
  else if(Cb1.checked)
  {
    Cbval="Batsman"
  }

  else if(Cb2.checked)
  {
    Cbval="Bowler"
  }

  // console.log(Cbval); 

  let playerCheck=false;

                if(arr.length==11)
                {
                  alert("Team is full") 
                  Clear()
                  return
                }
                if((Input1.value==""  && Input2.value=="") && (Cb1.checked==false || Cb2.checked==false) )
                {
                  alert("Fill all the details")
                  return;
                }

                for(let i=0;i<arr.length;i++)
                {
                  if(arr[i].player_name==Input1.value)
                  {
                    alert("Player Already Exists")
                    playerCheck=true
                    Clear()
                  }
                }
                // console.log(Cbval)
                let myobject={
                  player_name: Input1.value,
                  age: Input2.value,
                  type:Cbval,
                }
                console.log(myobject)
                if(playerCheck==false)
                {
                arr.push(myobject);
                localStorage.setItem("arr", JSON.stringify(arr))
                Clear()
                // console.log(arr);
                display(arr)
                }
}

function inc()
{
  Input2.innerHTML=Input2.value++;
}

function dec()
{
  Input2.innerHTML=Input2.value--;
}

function Clear()
{
  Input1.value = "";
  Input2.value = "";

  Cb1.checked=false
  Cb2.checked=false

}
function display(arr)
{
  // console.log(arr[0].player_name)
  if(arr.length==0)
  { 
      console.log("first")
      NoTaleValue.innerHTML="No value is added"
    // TableValue.innerHTML=a;
  }
  else
  {
    NoTaleValue.innerHTML=""
  a= ` <table>
        <tr>
        <th>Sr No </th>
        <th>Player Name</th>
        <th>Age</th>
        <th>Type</th>
        </tr>`

    for(let i=0;i<arr.length;i++) 
    {   
    a+=`
      <tr>

      <td>
      ${i+1}
      </td>


      <td>
      ${arr[i].player_name}
      </td>

      <td>
      ${arr[i].age}
      </td>

      <td>
      ${arr[i].type}
      </td>

      </tr> 
      `;
    }
   
a+=`</table>`;

`<button> Clear</button>`

TableValue.innerHTML=a
  }
}