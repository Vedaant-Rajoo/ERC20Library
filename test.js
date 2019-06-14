const index = require("./index");
var ethOwner = ["0x71C87c3CdDD796ED3319A3D47676301b51B66139"];
var tokenOwner = ["0xBE4F37a933Dc0cDc0641f42C4495582ecB9e6D3d","0x088238a7b3Fd8F26Ab526C779C4f06c437de10f8"];
var tokenAddresses = ["0x381a4c615df73c912f98c7b528fc415186cb69ea","0x381a4c615df73c912f98c7b528fc415186cb69ea"];

const assert = require('chai').assert;
console.log("------");
index.getEthBalances(ethOwner).then(r=>{console.log(r)});
console.log("------");
index.getERC20AssetBalances(tokenOwner,tokenAddresses).then(r=>{console.log(r)} );
console.log("------");
