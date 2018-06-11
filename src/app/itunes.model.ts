export class ItunesModel {

    trackName : string;
    artworkUrl30 : string;
    previewUrl : string;

    constructor (trackName : string, artworkUrl30 : string, previewUrl : string)
    {
        this.trackName = trackName;
        this.artworkUrl30 = artworkUrl30;
        this.previewUrl = previewUrl;
    }
}