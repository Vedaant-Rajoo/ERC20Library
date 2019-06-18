const erc20 = require("./index");
var ethOwner = ["0x71C87c3CdDD796ED3319A3D47676301b51B66139"];
var tokenOwner = ["0xBE4F37a933Dc0cDc0641f42C4495582ecB9e6D3d","0x088238a7b3Fd8F26Ab526C779C4f06c437de10f8"];
var tokenAddresses = ["0x381a4c615df73c912f98c7b528fc415186cb69ea","0x381a4c615df73c912f98c7b528fc415186cb69ea"];

const assert = require('chai').assert;


describe('Basic testing of result types', () => {
    it('should be an array ', () =>{

        erc20.getERC20AssetBalances(tokenOwner,tokenAddresses).then(r =>{
            assert.typeOf(r,'array');
        })
    })

    it('should return non-zero balance',() => {
        erc20.getEthBalances(ethOwner).then(r =>{
            assert.notEqual(r[0],0);
        })
    })
})
