// export default{
// 	bind(el, binding){
// 		let atraso = 0;
// 		if(binding.modifiers["atraso"]){
// 			atraso = 3000;
// 		}
// 		setTimeout(()=>{
// 			if(binding.arg === "fundo"){
// 				el.style.color = binding.value || "lightgreen";
// 			}else{
// 				el.style.backgroundColor = binding.value || "lightgreen";
// 			}
// 		}, atraso);
// 	}
// }