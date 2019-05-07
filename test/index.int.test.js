import * as KA from "../src";

describe("getScratchpad", function() {
	it("should get correct data for https://www.khanacademy.org/computer-programming/spin-off-of-project-whats-for-dinner/6259327758336000", async () => {
		const res = await KA.getScratchpad({ id:6259327758336000 });
		expect(res.status).toBe(200);
		expect(res.data.scratchpad.relativeUrl).toBe("/computer-programming/spin-off-of-project-whats-for-dinner/6259327758336000");
	});
});

describe("getChallenge", function() {
	it("should get correct data for https://www.khanacademy.org/computing/computer-programming/html-css/html-tags-continued/pc/challenge-jump-around", async () => {
		const res = await KA.getChallenge({ id:"x712ae29530655756" });
		expect(res.status).toBe(200);
		expect(res.data.scratchpad.defaultUrlPath).toBe("/computing/computer-programming/html-css/html-tags-continued/pc/challenge-jump-around");
	});
});
