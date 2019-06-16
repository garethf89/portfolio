
import * as contentful from "contentful";

const client = contentful.createClient({
  space: '12u07pqjlkdo',
  accessToken: 'bfb11c4cbb571c7cde7fa1685e47da37988fa1d31995ef21b417e2277682aa6f'
});

export default class dataService{

	constructor()
	{
		this.getData = this.getData.bind(this);
	}

	async getData(){

    const data = {};

    return client.getEntries({
      'content_type': 'project',
      'order': 'sys.createdAt'
    })
    .then((entries) => {
        data.projects = [];
        entries.items.forEach(function (entry) {
          data.projects.push(entry)
        });
    })
    .then(() => {
      client.getEntries({
        'content_type': 'work'
        }).then(function (entries) {
          data.work = [];
          entries.items.forEach(function (entry) {
            data.work.push(entry)
        });
      });
    }).then(() => {
      return data;
    })
	}
}