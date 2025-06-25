import {calc} from "./index";

describe("index.ts",()=>{
    describe("calc",()=>{
        test("calculate 1+3",()=>{
            const result=calc(1,3)

            expect(result).toBe(3)
        })
    })
})