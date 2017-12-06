var savefile = require("../X/filelog");
var savefilenow = new savefile;
var CronJob = require("cron").CronJob;

    async  function TimeRunSaveFile() {
        let a = new CronJob({
          cronTime: '00 45 18 * * *',
          onTick:  async function() {
            let a = await savefilenow.SaveFileKQXSMB();
            let b = await savefilenow.SaveFileKQXSMN();
            let c = await savefilenow.SaveFileKQXSMT();
            console.log('Save File Done');
          },
          start: true,
          timeZone: 'Asia/Ho_Chi_Minh'
        });
      }
module.exports = {TimeRunSaveFile};
