$(document).ready(function(){



	/* Create a LastFM object */
	var lastfm = new LastFM({
		apiKey    : 'fe1fe6c6f59ea566b7c512757dacfa1e',
		apiSecret : '51db792cb06647b34987891d7b06f38c'
	});
	
	var dateFrom = Math.round(new Date(2007, 00, 01, 00, 00, 00, 00).getTime() / 1000).toString();
	var dateTo = Math.round(new Date(2007, 11, 31, 59, 59, 59, 59).getTime() / 1000).toString();
	
	$('#submitYear').on('click',function(){
	
			/* Load some artist info. */
	lastfm.user.getWeeklyArtistChart({user: 'dirtyg', from: dateFrom, to: dateTo, api_key: 'fe1fe6c6f59ea566b7c512757dacfa1e'  }, {success: function(data){
		$('#results').html(data);
	}, error: function(code, message){
		/* Show error message. */
	}});
	
		
	/* Load some artist info. */
	lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
		/* Use data. */
	}, error: function(code, message){
		/* Show error message. */
	}});
	
	});

});