// ***
export const uIdMaker = (uIdLength = 20) => {
	let codePattern = "1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p";
	let pl = codePattern.length;
	let uId = "";
	for (let idx = 0; idx < uIdLength; idx++) {
		let randomNumber = Math.floor(Math.random() * pl);
		uId += codePattern[randomNumber];
	}
	return uId;
};
