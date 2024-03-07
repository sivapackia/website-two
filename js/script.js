let order=document.querySelector(".order")

function Menucard() {
			
	order.classList.remove("d-none")			
	order.classList.remove("disallow")
}

function removecard() {
order.classList.add("disallow")
order.classList.add("d-none")

}