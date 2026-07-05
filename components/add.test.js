import { Add } from "/components/add"
import {expect ,test} from "vitest"


test('add to number a and b ', ()=>{
    expect(Add(2, 4)).toBe(6)
})