/**
* Custom Javascripts
* If you prefer to use CoffeeScript, rename this files to custom.coffee
*/
<script type="text/javascript">
function validateDownloadForm() {
	var form = document.getElementById("downloadform");
	var result=form.elements["osandtype"].value;
    if (result==null || restult=="") {
        alert("Please select an Ecgine setup appropriate for you system.");
        return false;
    }else{
		switch (result) {
			case "windows64":
				window.open('http://s1.infra.ecgine.com/files/ecgine-client-x64-1.0.exe');
				break;
			case "windows32":
				window.open('http://s1.infra.ecgine.com/files/ecgine-client-x86-1.0.exe');
				break;
			case "mac":
				window.open('');
				break;
		}
    }
}
function showDemo(){
		var cp = $('#demo-video');
		cp.show();
		cp.dialog();
}
</script>
