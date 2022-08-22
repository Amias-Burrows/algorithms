console.log('Factory Method');

class Song {

		/*
		 * Handles variables held by parent and child classes
		 */

	contructor(name, lyrics, length, reference) {

		this.name = name;
		this.lyrics = lyrics;
		this.length = length;
		this.reference = reference;
	}

		/*
		 * Plays the video in a seperate window
		 */
	play() {

		if (this.reference != null) {

			window.open(this.reference);

		} else {

			return 'No reference link set';
		}
	}

	get_lyrics() {

		if (this.lyrics != null) {

			return this.lyrics;

		} else {

			return 'No lyrics set';
		}
	}

	get_length() {

		if (this.length != null) {

			return this.length;

		} else {

			return "You've not told me how long the song is yet.";
		}
	}
}

class Music_video extends Song {

	contructor(name, lyrics, length, reference, video) {

		super(name, lyrics, length, reference);

		this.video = video;
	}

	watch_video() {
		
		if (this.video != null) {
			
			window.open(this.video);

		} else {

			return 'No video link set';
		}
	}
}

let Bats = new Music_video('Bats', null, '2.25', 'https://youtube.com/watch?v=Hyxv30__Whg', 'https://youtube.com/watch?v=AiY1VHIy8hk');
