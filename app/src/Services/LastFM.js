
import axios from 'axios';

const url = `http://localhost:3000/lastFm`;
const data = {'name':'DirtyG'};
const headers ={
	'Content-Type': 'application/x-www-form-urlencoded'
};

export default class lastFmService{

	constructor()
	{
		this.getAlbums = this.getAlbums.bind(this);
	}

	getAlbums(){
		console.log('here')
		return axios.get(url, data, headers);
	}
}