const MemberModel = require('../scheme/member.module.js')
const Definer = require('../lib/mistake.js');
const assert = require('assert')


class Member {
    constructor() {
     this.memberModel = MemberModel
    }

    async signupData(input) {
        try{
             const new_member  = new this.memberModel(input) ;
             let result;
            try{
               result  = await new_member.save();
            } catch(mongo_err) {
                console.log(mongo_err);
               throw new Error(Definer.auth_err1)
            }
        
            result.mb_password = "";
         return result
        } catch (err) {
           throw err
        }
    }


    async loginData(input) {
        try{
            const member = await  this.memberModel
            .findOne({mb_nick: input.mb_nick}, {mb_nick: 1, mb_password:1 })
            .exec();

        assert.ok(member, Definer.auth_err3)
        
        const isMatch = input.mb_password === member.mb_password;
        assert.ok(isMatch, Definer.auth_err4)


        return await this.memberModel
         .findOne({
            mb_nick: input.mb_nick
         })
         .exec()
        } catch (err) {
           throw err
        }
    }
}

module.exports = Member