const index = require("./index");
var ethOwner = ["0x71C87c3CdDD796ED3319A3D47676301b51B66139"];
const assert = require('chai').assert;

it("connects well to the index file", async () => {
    try{
        res = await index.getEthBalances(ethOwner);
        console.log("------");
        console.log(res);
        console.log("------");

        assert.typeOf.eventually(Promise.resolve(res),'array','the res is supposed to be an array');

    }
    catch(er){
        console.log(er);
    }
})