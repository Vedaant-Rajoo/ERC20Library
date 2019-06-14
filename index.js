var Web3 			 = require('web3');
var ethereum_address = require('ethereum-address');
var BigNumber 		 = require('bignumber.js');


if(typeof web3 != 'undefined')
    web3 = new Web3(web3.currentProvider);

else
    web3 = new Web3( new Web3.providers.HttpProvider("https://kovan.infura.io/v3/181e3b7996ce4244a662e8240bcf9260"));

//specify default eth account
var myABI = require("./MyABI.json");
var erc20 = new web3.eth.Contract(myABI,"0x44445a37842a7d83938b5520139f471a40791064");
var tokenOwner = ["0xBE4F37a933Dc0cDc0641f42C4495582ecB9e6D3d","0x088238a7b3Fd8F26Ab526C779C4f06c437de10f8"];
var tokenAddresses = ["0x381a4c615df73c912f98c7b528fc415186cb69ea","0x381a4c615df73c912f98c7b528fc415186cb69ea"];


		function changeToBalance(balance){
		var newBalance = [];
		for(i=0;i<balance.length;i+=2){
			var res = new BigNumber(balance[i]);
			if (i==0)
				newBalance[0]=res.div(10**balance[1]).toString();
			else
				newBalance[i/2]=res.div(10**balance[i+1]).toString();

			
		}
		return newBalance;

	}
	function changeToEth(balance){
		var newBalance = [];
		for(i=0;i<balance.length;i++){
			var res = new BigNumber(balance[i]);
			newBalance[i] = res.div(10**18).toString();
		}
		return newBalance;
	}

	async function getERC20AssetBalances(a,b){
		try{
			flag= false;
			for (i=0;i<a.length;i++){
				if(ethereum_address.isAddress(a[i]) && ethereum_address.isAddress(b[i])){
					flag=true;
				}
				else
				flag= false;
			}
			// console.log(flag);
			if(flag){
				var res = await erc20.methods.getERC20AssetBalances(a,b).call();
				/* console.log(res); */
				//console.log(changeToBalance(res));
				return changeToBalance(res);
			}
			else
				console.log("Error! Something went wrong");
		}
		catch(er){
			console.log(er);
		}
	}

	var ethOwner = ["0x71C87c3CdDD796ED3319A3D47676301b51B66139"];

	//getERC20AssetBalances(tokenOwner,tokenAddresses);

	 async function getEthBalances(a){
		try{
			flag= false;
			for (i=0;i<a.length;i++){
				if(ethereum_address.isAddress(a[i])){
					flag=true;
				}
				else
					flag=false;
			}
			if(flag){
				var res = await erc20.methods.getEthBalances(a).call();
				return changeToEth(res);
			}
			else
				console.log("Error");
		}
		catch(er){
			console.log(er);
		}
	}
	//getEthBalances(ethOwner);

	async function getERC20Allowances(a,b,c){
		try 
		{
			flag= false;
			for(i=0;i<a.length;i++){
				if(ethereum_address.isAddress(a[i]) && ethereum_address.isAddress(b[i]) && ethereum_address.isAddress(c[i])){
					flag= true;
				}
				else
				flag=flase;
			}
			if(flag){
				var res = await erc20.methods.getERC20Allowances(a,b,c).call();
				// console.log(res);
				return res;
			}
			else
				console.log("Error getting allowances..");

		}
		catch(er){
			console.log(er);
		}
	}
	//getERC20Allowances(tokenOwner,tokenAddresses,tokenOwner);

module.exports = {getEthBalances,getERC20Allowances,getERC20AssetBalances,changeToEth,changeToBalance};