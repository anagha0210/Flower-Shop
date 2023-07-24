var itemno=0;
var addtocart=document.getElementById('cart');
addtocart.addEventListener('onClick',location.href="cart.html");
function add(item )
{
itemno+=1;
var sitem=document.createElement("img");
sitem.classList.add("cartimg");
sitem.setAttribute('id',itemno);
var img=document.createElement('img');
img.setAttribute('src',item.children[0].currentSrc);
var title=document.createElement("img");
title.innerText=item.children[1].innerText;
var label=document.createElement("img");
label.innerText=item.children[2].children[0].innerText;
var select=document.createElement("span");
select.innerText=item.children[2].children[1],value;
label.append(select);
var delbtn=document.createElement("button");
delbtn.innerText="Delete";
delbtn.setAttribute('onclick','del('+itemno+')');
var cartitem=document.getElementsByClassName("ig");
sitem.append(img);
sitem.append(title);
sitem.append(label);
sitem.append(delbtn);
cartitem.append(sitem);

}
function del(item)
{
	document.getElementById(item).remove();
}

	/*var noti = document.querySelector('h3');
	var select = document.querySelector();
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})*/