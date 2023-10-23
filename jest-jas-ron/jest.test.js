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
}