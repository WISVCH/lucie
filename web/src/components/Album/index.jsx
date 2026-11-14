import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Element } from 'react-scroll';
import './index.scss';

// import Intro from '../../assets/album/Intro.wav';
import Highlight from '../../assets/album/highlight.mp3';
import BoA from '../../assets/album/BoA.wav';
import Wiewie from '../../assets/album/wiewie.mp3';
import Gala from '../../assets/album/gala.mp3';
import OuweLul from '../../assets/album/ouweLul.wav';
import Cosmo from '../../assets/album/joep.wav';
import GeenETV from '../../assets/album/geenETV.wav';
import Kurk from '../../assets/album/kurk.wav';
import Bestuur from '../../assets/album/inhethok.mp3';
import albumCover from '../../assets/album/albumCover.png';

const Album = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false); 
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isShuffle, setIsShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState('all'); 

    const audioRef = useRef(null);

    const tracks = [
        { id: 1, title: "Highlight", artist: "LuCie 14", durationStr: "3:14", src: Highlight },
        { id: 2, title: "BoA", artist: "BoA 68", durationStr: "1:58", src: BoA },
        { id: 3, title: "Green Suits and Study", artist: "WIEWIE", durationStr: "1:14", src: Wiewie },
        { id: 4, title: "Date voor het Gala", artist: "GalaCie", durationStr: "4:09", src: Gala },
        { id: 5, title: "Echt een ouwe lul", artist: "Mean House", durationStr: "3:07", src: OuweLul },
        { id: 6, title: "Cosmo", artist: "LvV Joep", durationStr: "3:20", src: Cosmo },
        { id: 7, title: "Geen ETV", artist: "Makkelijke Misha en PauLIDL", durationStr: "3:37", src: GeenETV },
        { id: 8, title: "Kurk", artist: "Dr. Saaf (ft. PauLIDL)", durationStr: "2:33", src: Kurk },
        { id: 9, title: "In het Hok", artist: "Bestuur 70", durationStr: "2:47", src: Bestuur },
    ];

    const currentTrack = tracks[currentTrackIndex];

    const selectTrack = useCallback((index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
        setHasStarted(true);
        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play();
            }
        }, 50);
    }, []);

    const handleNext = useCallback(() => {
        if (repeatMode === 'one') {
            setRepeatMode('all');
        }

        if (isShuffle) {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * tracks.length);
            } while (nextIdx === currentTrackIndex && tracks.length > 1);
            selectTrack(nextIdx);
        } else {
            if (currentTrackIndex < tracks.length - 1) {
                selectTrack(currentTrackIndex + 1);
            } else {
                if (repeatMode === 'all') {
                    selectTrack(0);
                } else {
                    setIsPlaying(false);
                }
            }
        }
    }, [currentTrackIndex, isShuffle, repeatMode, tracks.length, selectTrack]);

    const handleTrackEnd = useCallback(() => {
        if (repeatMode === 'one') {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        } else {
            handleNext();
        }
    }, [repeatMode, handleNext]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration || 0);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleTrackEnd);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleTrackEnd);
        };
    }, [handleTrackEnd]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        setHasStarted(true);
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePrev = () => {
        if (repeatMode === 'one') {
            setRepeatMode('all');
        }
        if (currentTrackIndex > 0) {
            selectTrack(currentTrackIndex - 1);
        } else {
            selectTrack(tracks.length - 1);
        }
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    };

    const handleVolumeChange = (e) => {
        const newVol = parseFloat(e.target.value);
        setVolume(newVol);
        if (audioRef.current) {
            audioRef.current.volume = newVol;
        }
    };

    const toggleShuffle = () => setIsShuffle(!isShuffle);

    const toggleRepeat = () => {
        if (repeatMode === 'off') setRepeatMode('all');
        else if (repeatMode === 'all') setRepeatMode('one');
        else setRepeatMode('off');
    };

    const formatTime = (secs) => {
        if (isNaN(secs)) return "0:00";
        const mins = Math.floor(secs / 60);
        const remainingSecs = Math.floor(secs % 60);
        return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
    };

    return (
        <section id="album">
            <Element name="album"></Element>
            <div className="Block">
                <h2>Lustrum Album</h2>
                <p>
                    The Lustrum Album has arrived! A big thanks to all the contributors of the album. 
                    Make sure to give it a listen, and enjoy!
                </p>

                <div className="Album-Container">
                    <audio 
                        ref={audioRef} 
                        src={currentTrack.src} 
                    />

                    <div className="Album-Main-Layout">
                        <div className="Album-Cover-Box">
                            <img src={albumCover} alt="Lustrum Album Cover" className="Album-Cover-Img" />
                        </div>

                        {/* Track List */}
                        <div className="Track-List">
                            {tracks.map((track, index) => {
                                const isSelected = currentTrackIndex === index;
                                const isThisPlaying = isSelected && isPlaying;

                                return (
                                    <div 
                                        key={track.id} 
                                        className={`Track-Item ${isSelected ? 'active' : ''}`}
                                        onClick={() => selectTrack(index)}
                                    >
                                        <div className="Track-Play-Btn">
                                            {isThisPlaying ? '❚❚' : '▶'}
                                        </div>
                                        <div className="Track-Details">
                                            <span className="Track-Title">{track.title}</span>
                                            <span className="Track-Artist">{track.artist}</span>
                                        </div>
                                        <span className="Track-Duration">{track.durationStr}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {hasStarted && (
                        <div className="Advanced-Player-Bar">
                            <div className="Player-Track-Info">
                                <span className="Playing-Title">{currentTrack.title}</span>
                                <span className="Playing-Artist">{currentTrack.artist}</span>
                            </div>

                            <div className="Player-Center-Controls">
                                <div className="Player-Buttons">
                                    <button 
                                        className={`Control-Icon-Btn ${isShuffle ? 'active' : ''}`} 
                                        onClick={toggleShuffle}
                                        title="Shuffle"
                                    >
                                        🔀
                                    </button>
                                    <button className="Control-Icon-Btn" onClick={handlePrev} title="Previous">
                                        ⏮
                                    </button>
                                    <button className="Play-Pause-Main-Btn" onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
                                        {isPlaying ? '❚❚' : '▶'}
                                    </button>
                                    <button className="Control-Icon-Btn" onClick={handleNext} title="Next">
                                        ⏭
                                    </button>
                                    <button 
                                        className={`Control-Icon-Btn ${repeatMode !== 'off' ? 'active' : ''}`} 
                                        onClick={toggleRepeat}
                                        title={`Repeat: ${repeatMode}`}
                                    >
                                        {repeatMode === 'one' ? '🔂' : '🔁'}
                                        {repeatMode === 'one' && <span className="repeat-badge">1</span>}
                                    </button>
                                </div>

                                <div className="Player-Progress-Container">
                                    <span className="Time-Current">{formatTime(currentTime)}</span>
                                    <input 
                                        type="range" 
                                        className="Seek-Slider"
                                        min={0} 
                                        max={duration || 100} 
                                        value={currentTime} 
                                        onChange={handleSeek}
                                    />
                                    <span className="Time-Total">{formatTime(duration)}</span>
                                </div>
                            </div>

                            <div className="Player-Volume-Container">
                                <span className="Volume-Icon">🔊</span>
                                <input 
                                    type="range" 
                                    className="Volume-Slider"
                                    min={0} 
                                    max={1} 
                                    step={0.01} 
                                    value={volume} 
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Album;