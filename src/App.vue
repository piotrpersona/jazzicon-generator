<template>
    <body>
        <div class="container">
            <h1>jazzicon generator</h1>
            <div class="icon">
                <Jazzicon id="jazzicon" :diameter="diameter" :address="address" />
            </div>
            <div>
                <button @click="generate">generate</button>
            </div>
            <div>
                <button @click="downloadSVG">download</button>
            </div>
        </div>
    </body>
</template>

<script>
    import { Canvg } from 'canvg';

    export default {
        name: "App",
        data() {
            return {
                address: "264931760",
                diameter: 256,
            };
        },
        methods: {
            generate(event) {
                this.address = `${Math.round(Math.random() * 1000000000)}`;
            },
            downloadSVG(evt) {
                const svgContent = document.getElementById("jazzicon").getElementsByTagName("div")[0].innerHTML;

                var canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const canv = Canvg.fromString(ctx, svgContent);
                // canv.resize(512, 512);
                canv.start();
                
                const img = canvas.toDataURL('image/png');
                var downloadLink = document.createElement("a");
                downloadLink.href = img;
                downloadLink.download = `jazzicon-${this.address}.png`;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            }
        },
    };
</script>

<style>
.icon {
    flex: 1;
    max-width: 300px;
}
</style>