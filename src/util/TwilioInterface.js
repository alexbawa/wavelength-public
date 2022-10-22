const Twilio = require('twilio');
const twilioClient = new Twilio('AC77b95886fae988e0b64e988a64480d90','a3e6909c531a7f79b678262a21055e80');
const twilioNumber = '+14632636766'

const TwilioInterface = {
    async sendHotVote(phoneNumbers, songInfo) {
        phoneNumbers.forEach(phoneNumber => {
            twilioClient.messages.create({
                to: phoneNumber,
                from: twilioNumber,
                body: `The DJ just started a hot vote on ${songInfo.name} by ${songInfo.artist}!\n
                       Respond to this message with YES if you want to hear this song, or NO if you don't! 
                       Respond quickly, the vote ends in one minute.`,
            })
        });
    },
};

export default TwilioInterface;