
import axios from 'axios';

const url = `${process.env.REACT_APP_API_URL}/lastFm`;
const data = {'name':'DirtyG'};
const headers ={
	'Access-Control-Allow-Origin': '*',
	'Content-Type': 'application/x-www-form-urlencoded'
};

export default class lastFmService{

	constructor()
	{
		this.getAlbums = this.getAlbums.bind(this);
	}

	getAlbums(){
		return axios.post(url, data, headers);
	}
}