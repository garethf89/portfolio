
import axios from 'axios';

export default class dataService
{

  headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
	constructor()
	{
		this.getData = this.getData.bind(this);
	}

	async getData(){

    const data = {};
    data.projects = [];
    data.skills = [];
    data.work = [];

    await axios.get(`${process.env.REACT_APP_API_URL}/data/projects`, this.headers)
    .then((entries) => {
        entries.data.forEach(function (entry) {
          data.projects.push(entry)
        });
    });

    await axios.get(`${process.env.REACT_APP_API_URL}/data/skills`, this.headers)
    .then((entries) => {
        entries.data.forEach(function (entry) {
          data.skills.push(entry)
        });
    });

    await axios.get(`${process.env.REACT_APP_API_URL}/data/work`, this.headers)
    .then((entries) => {
        if(entries.data) {
          entries.data.forEach(function (entry) {
            data.work.push(entry)
          });
        } 
    });


    return data;
	}
}