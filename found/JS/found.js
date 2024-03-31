/**
 * @author Leviathenn
 */


window.addEventListener("load",()=>{
    console.log("DOM Loaded.");

    const URLSearch = window.location.search;
    const Args = new URLSearchParams(URLSearch);
    const o = Args.get("o");
    new Promise(()=>{
        if(atob(o)){
            let Buttons = {
                "learnmore": {
                    element: document.querySelector(".btn-learn_more"),
                    click: ()=>{
                      window.open("/found/learn/more","_blank");
                    }
              },
              "letsgo": {
                  element: document.querySelector(".btn-find_instance"),
                  click: ()=>{
            
                    window.open(atob(o),"_blank");
                  }
              }
          }
          document.querySelectorAll("#button").forEach((btn)=>{
        
            btn.addEventListener("click",(ev)=>{
                new Promise(()=>{
                    let Button = btn.className.replace("btn-","").replace("_","");
             
                    Buttons[Button].click();
                
    
    
                }).catch((e)=>{
                    console.log("[Error] Couldn't reslove Button Data.")
                
                });
           });
        });
        }else{
            throw "exeptions";
        }
        
    }).catch(()=>{window.location.assign("/error/?g=2");})
    
})