describe("areYouTired", () => {
    it (" returns drink coffee or keep working", () => {
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
    })
})

const areYouTired = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else if (string === "no") {
        return "keep working"
    }
}  //Passed


describe("areYouStress", () => {
    it("returns relax or keep going", () => {
        expect(areYouStress("yes")).toEqual("relax")
        expect(areYouStress("no")).toEqual("keep going")
    })
})

const areYouStress = (string) => {
    if(string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}  //Passed

describe("inBudget", () => {
    it("returns in budget", () => {
        expect(inBudget(300)).toEqual("in budget")
    })
})

const inBudget = (num1) => {
    if(num1 <= 300) {
        return "in budget"
    } else {
        return "not in budget"
    }
}  //Passed

describe("smlNum", () => {
    it("returns smaller number", () => {
        expect(smlNum()).toEqual()
    })
}) 

const smlNum = (num1, num2) => {
    if(num1 < num2) {
        return num1
    }else
    return num2
}  //Passed