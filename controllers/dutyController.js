const Duty = require('../models/Duty')


exports.createDuty = async (req, res) => {
    
    try {
        let duty;
        
        // Create our duty
        duty = new Duty(req.body);

        await duty.save();
        res.send(duty);

    } catch(err) {

        console.log(err);
        res.status(500).send('An error has occure.');

    }

}

exports.getDuties = async (req, res) => {

    try {

        const duties = await Duty.find();
        res.json(duties);

    } catch (err) {

        console.log(err);
        res.status(500).send('An error has occure.');

    }

}


exports.updateDuty = async (req, res) => {

    try {
        console.log(req.body.Name)

        const name = req.body.Name;
        let duty = await Duty.findById(req.params.id);

        if(!duty) {
            res.status(404).json({ msg: 'The duty does not exist'});
        };

        duty.Name = name;
        console.log(duty.Name)

        duty = await Duty.findOneAndUpdate({ _id: req.params.id }, duty, { new: true });
        res.json(duty);

    } catch (err) {

        console.log(err);
        res.status(500).send('An error has occure.');

    }

}

exports.getDuty = async (req, res) => {

    try {

        let duty = await Duty.findById(req.params.id);

        if(!duty) {
            res.status(404).json({ msg: 'The duty does not exist'});
        };

        res.json(duty);

    } catch (err) {

        console.log(err);
        res.status(500).send('An error has occure.');

    }

}

exports.deleteDuty = async (req, res) => {

    try {

        let duty = await Duty.findById(req.params.id);

        if(!duty) {
            res.status(404).json({ msg: 'The duty does not exist'});
        };

        await Duty.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Duty deleted successfully' });

    } catch (err) {

        console.log(err);
        res.status(500).send('An error has occure.');

    }

}



