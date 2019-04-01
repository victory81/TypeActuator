 // function cons(idx){
        //     console.log(idx)
        // }
        function load() {
            /*单指拖动*/
            var itemHeight = 40;  //每个item选项的高度
            var obj = document.querySelector('.num_box');
            var html2 = '';
            for(var i=1;i<60;i++){
                html2+='<div class="age-item" onclick="cons('+i+')" style="top:'+(i-1)*itemHeight+'px">'+i+'&nbsp;周岁</div>'
            }
            obj.innerHTML = html2;
            var touchStart = 0;
            var touchEnd =0;
            var ageOption = document.getElementsByClassName('age-item');
            changeSelectStyle(ageOption);
            obj.addEventListener("touchstart", function(event) {
                var touch = event.targetTouches[0];
                touchStart = touch.pageY;
                obj.addEventListener('touchmove', function(event) {
                    // 如果这个元素的位置内只有一个手指的话 
                    if (event.targetTouches.length == 1) {　　　　
                        event.preventDefault(); // 阻止浏览器默认事件
                        var touch = event.targetTouches[0];
                        touchEnd = touch.pageY;
                    }
                }, false);
            });
            obj.addEventListener("touchend", function() {
                var ages = document.getElementsByClassName('age-item');
                if(touchEnd-touchStart>0){  //向下滑
                    var ageItem = 0;
                    for(let j=0;j<ages.length;j++){
                        if(ages[j].style.top == '0px'|| ages[j].style.top == 0){
                            ageItem = ages[j].innerHTML;
                            break;
                        }
                    }
                    if(parseInt(ages[0].style.top)>=2*itemHeight){
                        return;
                    }else{
                        if(parseInt(ageItem)+1 < Math.ceil((touchEnd-touchStart)/itemHeight)){
                             var diff = parseInt(ageItem)+1;
                             changeTop(ages,diff);
                        }else{
                            var diff = Math.ceil((touchEnd-touchStart)/itemHeight);
                             changeTop(ages,diff);
                        }
                    }
                }else{       //向上滑
                    var ageItem = 0;
                    for(let k=ages.length-1;k>0;k--){
                        if(ages[k].style.top == 2*itemHeight +'px'){
                            ageItem = ages[k].innerHTML;
                            break;
                        }
                    }
                   if(parseInt(ages[ages.length-1].style.top)<=1*itemHeight){
                        return;
                    }else{
                        if(ageItem==''){
                            var diff = -1;
                            changeTop(ages,diff);
                        }else if((59-parseInt(ageItem))+2<Math.ceil(Math.abs(touchEnd-touchStart)/itemHeight)){
                            var diff = parseInt(ageItem)-59-2;
                            changeTop(ages,diff);
                        }else{
                            var diff = Math.ceil((touchEnd-touchStart)/itemHeight);
                            changeTop(ages,diff);
                        }
                    }
                }
                // 由于上面需要修改59次样式，需要进行59次的重绘；可以修改为重新插入一次，在此不详细列出
                delEvent(obj,'touchstart');
                delEvent(obj,'touchmove');
            });
            function delEvent(obj,evt,fn,useCapture){
               if (obj.removeEventListener) {
               //先使用W3C的方法移除事件处理函数
                   obj.removeEventListener(evt,fn,!!useCapture);
               }else {
                  if(obj.__EventHandles){
                     var fns = obj.__EventHandles[evt];
                     if(fns){delete fns[fn.__EventID];}
                  }
                }
            }
            function changeTop(obj,diff){
                for(let k=0;k<obj.length;k++){
                    obj[k].style.top = parseInt(obj[k].style.top) + diff*itemHeight +'px';
                }
                changeSelectStyle(ageOption);
            }
            function changeSelectStyle(arr){
                for(var i=0 ; i < arr.length ; i++){
                    if(hasClass('age-option-select',arr[i])){
                        removeClass('age-option-select',arr[i])
                    }
                    if(arr[i].style.top!=undefined && arr[i].style.top == 1*itemHeight+'px'){
                        if(!hasClass('age-option-select',arr[i])){
                            addClass('age-option-select',arr[i])
                        }
                    }
                }
            }
        }
        // 公有方法
        function hasClass(cla, element) {
            if(element.className.trim().length === 0) return false;
            var allClass = element.className.trim().split(" ");
            return allClass.indexOf(cla) > -1;
        }
        function addClass(cla,element){
            if(!hasClass(cla,element)){
                if(element.setAttribute){
                    element.setAttribute("class",element.getAttribute("class")+" "+cla);
                }else{
                    element.className = element.className+" "+cla;
                }
            }
        }
        function removeClass(cla,element){
            if(hasClass(cla,element)){
                var allClass = element.className.trim().split(" ");
                allClass.splice(allClass.indexOf(cla),1);
                element.className = allClass.join(' ');
            }
        }