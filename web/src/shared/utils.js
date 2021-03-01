import { notAllowedWords } from './constants';

export const applyTextFilter = (msgTxt) => {
	if (msgTxt.length > 0) {
		const blockedString = '$%*&%#';
		const wordsArray = msgTxt.trim().split(' ');

		const urlPattern = /https?\:(.*)/gi;
		const urlPatternAllowed = /https?\:\/\/(www\.)?youtube\.com(.*)/gi;
		const regexFromMyArray = new RegExp(`\W*(${notAllowedWords.join('|')})`, 'gi');
		const regexPhoneNumbers = new RegExp(/\d{6}/);

		return wordsArray
			.map((word) => {
				const isBlockedWord = regexFromMyArray.test(word);
				const isPhone = regexPhoneNumbers.test(word);
				const isUrl = urlPattern.test(word);
				const isYoutubeLink = urlPatternAllowed.test(word);

				if (isUrl) {
					return isYoutubeLink ? word : blockedString;
				}

				return isPhone || isBlockedWord ? blockedString : word;
			})
			.join(' ');
	}

	return msgTxt;
};
