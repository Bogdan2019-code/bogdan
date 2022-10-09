$(document).ready(function(){
    document.getElementById('loginbutton').addEventListener('click', 
        function(){
        document.querySelector('.nav-wrapper').style.display = "none";
        document.querySelector('.nav-btn').style.display = "none";
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('loginbutton1').addEventListener('click', 
        function(){
        document.querySelector('.nav-wrapper').style.display = "none";
        document.querySelector('.nav-btn').style.display = "none";
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('loginbutton2').addEventListener('click', 
        function(){
        document.querySelector('.nav-wrapper').style.display = "none";
        document.querySelector('.nav-btn').style.display = "none";
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('regbutton').addEventListener('click', 
        function(){
        document.querySelector('.nav-wrapper').style.display = "none";
        document.querySelector('.nav-btn').style.display = "none";
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });

    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.nav-wrapper').style.display = "inline";
        document.querySelector('.nav-btn').style.display = "inline";
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.querySelector('.close2').addEventListener('click', function(){
        document.querySelector('.nav-wrapper').style.display = "inline";
        document.querySelector('.nav-btn').style.display = "inline";
        document.querySelector('.bg-modal2').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.getElementById('log').addEventListener('click',
    function(){
        document.querySelector('.login').style.opacity = '1';
    });
    document.getElementById('notreg').addEventListener('click',
    function(){
        document.querySelector('.bg-modal2').style.display = 'none';
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });

    //Streams
    document.getElementById('stream1').addEventListener('click', 
        function(){
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('stream2').addEventListener('click', 
        function(){
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('stream3').addEventListener('click', 
        function(){
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('stream4').addEventListener('click', 
        function(){
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('stream5').addEventListener('click', 
        function(){
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    //Games
    document.getElementById('game1').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game2').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game3').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game4').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game5').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game6').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game7').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('game8').addEventListener('click', 
        function(){
            document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('gamebut').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    //Tournaments
    document.getElementById('tour1').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour2').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour3').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour4').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour5').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour6').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour7').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour8').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tour9').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('tourbut').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });

    //Footer
    document.getElementById('aboutus').addEventListener('click',
    function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal3').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.querySelector('.close3').addEventListener('click', function(){
        document.querySelector('.bg-modal3').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.getElementById('support').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('recruit').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('coop').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal4').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('wantlivebroadcast').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.querySelector('.close4').addEventListener('click', function(){
        document.querySelector('.bg-modal4').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.getElementById('integrity').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal5').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.querySelector('.close5').addEventListener('click', function(){
        document.querySelector('.bg-modal5').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.getElementById('feedback').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal2').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.getElementById('copyright').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal6').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.querySelector('.close6').addEventListener('click', function(){
        document.querySelector('.bg-modal6').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.getElementById('privacy').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal7').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.querySelector('.close7').addEventListener('click', function(){
        document.querySelector('.bg-modal7').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
    document.getElementById('useragr').addEventListener('click', 
        function(){
        document.querySelector('.controls').style.display = "none";
        document.querySelector('.bg-modal8').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    });
    document.querySelector('.close8').addEventListener('click', function(){
        document.querySelector('.bg-modal8').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.controls').style.display = "flex";
    });
});
