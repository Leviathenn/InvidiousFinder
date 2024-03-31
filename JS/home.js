/**
 * @author Leviathenn
 */

window.addEventListener("load",()=>{
    //The Window has been loaded.
    let Buttons = {
        /**
         * Started a new practice of Having a JSON Components
         * So We define all functionality for each Button By Name.
         */
        "learnmore": {
          element: document.querySelector(".btn-learn_more"),
          click: ()=>{
            window.open("https://leviathenn.github.io/InvidiousFinder/learn/more","_blank");
          }
        },
        "findinstance": {
            element: document.querySelector(".btn-find_instance"),
            click: ()=>{
                !(()=>{
                    /**
                     * Self call an Asyncronous Function.
                     * I should have used jquery :/
                     */
                    new Promise(async ()=>{
                        const response = await fetch("JSON/piped.json").catch((err)=>{ console.error("[Error]: Error Fetching file Status: CRITICAL!!! Cause: INTERNAL SERVER ERROR.")});
                        if(typeof(response) == "object"){
                            let foundone = false;
                            let res = await response.json().catch(()=>{
                                console.error("[Error]: Error Fetch was not of type JSON Status: CRITICAL!!! Cause: INTERNAL SERVER ERROR.")
                            });
                            new Promise((resolve)=>{
                                let index= 0;
                                res.forEach((instanceurl)=>{
                                    fetch(instanceurl, {
                                        
                                    }).then((response)=>{
                                        if(response.status == 200){
                                            console.log(`Got one: ${instanceurl}`);
                                            foundone = true;
                                            window.location.assign(`https://leviathenn.github.io/InvidiousFinder/found/index.html?o=${btoa(instanceurl)}`)
                                           if(index == res.length - 1){
                                            resolve();
                                           } else{

                                           }
                                           index++;
                                        }

                                    }).catch((error)=>{
                                        if (error.response) {
                                            console.log('Status code:', error.response.status);
                                        }
                                        if(index == res.length - 1){
                                            resolve();
                                           } else{
                                            
                                           }
                                           index++;
                                           console.log(`res: ${res.length} index:${index}`);
                                    })
                                });
                               
                            }).then(()=>{
                                if(foundone){
                                    window.location.assign('https://leviathenn.github.io/InvidiousFinder/error/?g=5');
                                }else{
                                    console.log("aww snap...");
                                }
                            }).catch((err)=>{console.error("[Error]: Error Fetch did not have the type JSONArray Status: CRITICAL!!! Cause: INTERNAL SERVER ERROR.");})
                        }else{
                            console.error("[Error]: Error Fetch did not have the correct JSON Type. Status: CRITICAL!!! Cause: INTERNAL SERVER ERROR.")
                        }
                    }).catch((()=>{
                        console.error("[Error]: Error Fetching file Status: CRITICAL!!! Cause: INTERNAL SERVER ERROR.")
                    }));
                })();
            }
        }
    }
    document.querySelectorAll("#button").forEach((btn)=>{
      
        btn.addEventListener("click",(ev)=>{
            new Promise(()=>{
                let Button = btn.className.replace("btn-","").replace("_","");
                
                Buttons[Button].click();
            


            }).catch(()=>{
                console.log("[Error] Couldn't reslove Button Data.")
            });
       });
    });

})
