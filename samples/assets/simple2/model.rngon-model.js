"use strict";

// A 3d model exported from Blender via the retro n-gon renderer's exporter.
//
// Usage:
//    - call .initialize(), which populates the .ngons array
//    - now you can access the n-gons via .ngons
//    - if you need .initialize() to finish before you start rendering, call it with await inside an async()=>{} wrapper
const texturedCubeModel2 =
{
	ngons:[],
	initialize: async function()
	{
		// Shorthands, for a smaller file size.
		const n = Rngon.ngon;
		const v = Rngon.vertex;
		const c = Rngon.color_rgba;
		const ct = Rngon.texture_rgba.create_with_data_from_file;

		// Load the textures.
		const t = {
			"painting.png":await ct("./assets/simple2/painting.png.rngon-texture.json"),
			"wood.png":await ct("./assets/simple2/wood.png.rngon-texture.json"),
		};

		// Set up the materials.
		const m = {
			"cube1":{color:c(255,255,255, 0),hasWireframe:true,wireframeColor:c(100,100,100),},
			"cube2":{color:c(188,188,188),},
			"cube3":{color:c(255,255,255),texture:t["wood.png"],},
			"cube3-front":{color:c(255,255,255),texture:t["painting.png"],},
			"cube4":{color:c(255,255,255),texture:t["wood.png"],textureMapping:"affine",},
			"cube4-front":{color:c(255,255,255),texture:t["painting.png"],},
		};

		// N-gons.
		this.ngons = Object.freeze(
		[
			// Parent mesh: Cube1.
			n([v(2.7500,-2.7500,1.0000,0.0000,0.0000),v(2.7500,-2.7500,-1.0000,0.0000,-1.0000),v(0.7500,-2.7500,-1.0000,-1.0000,-1.0000),v(0.7500,-2.7500,1.0000,-1.0000,0.0000),],m["cube4"]),
			n([v(2.7500,-0.7500,1.0000,0.0000,1.0000),v(0.7500,-0.7500,1.0000,-1.0000,1.0000),v(0.7500,-0.7500,-1.0000,-1.0000,0.0000),v(2.7500,-0.7500,-1.0000,-0.0000,-0.0000),],m["cube4"]),
			n([v(2.7500,-2.7500,1.0000,0.0000,0.0000),v(2.7500,-0.7500,1.0000,-0.0000,1.0000),v(2.7500,-0.7500,-1.0000,-1.0000,1.0000),v(2.7500,-2.7500,-1.0000,-1.0000,0.0000),],m["cube4"]),
			n([v(2.7500,-2.7500,-1.0000,0.0000,0.0000),v(2.7500,-0.7500,-1.0000,-0.0000,1.0000),v(0.7500,-0.7500,-1.0000,-1.0000,1.0000),v(0.7500,-2.7500,-1.0000,-1.0000,0.0000),],m["cube4-front"]),
			n([v(0.7500,-2.7500,-1.0000,0.0000,0.0000),v(0.7500,-0.7500,-1.0000,0.0000,1.0000),v(0.7500,-0.7500,1.0000,1.0000,1.0000),v(0.7500,-2.7500,1.0000,1.0000,0.0000),],m["cube4"]),
			n([v(2.7500,-0.7500,1.0000,0.0000,0.0000),v(2.7500,-2.7500,1.0000,0.0000,-1.0000),v(0.7500,-2.7500,1.0000,-1.0000,-1.0000),v(0.7500,-0.7500,1.0000,-1.0000,0.0000),],m["cube4"]),
			// Parent mesh: Cube4.
			n([v(-0.7500,-2.7500,1.0000,0.0000,0.0000),v(-0.7500,-2.7500,-1.0000,0.0000,-1.0000),v(-2.7500,-2.7500,-1.0000,-1.0000,-1.0000),v(-2.7500,-2.7500,1.0000,-1.0000,0.0000),],m["cube3"]),
			n([v(-0.7500,-0.7500,1.0000,0.0000,1.0000),v(-2.7500,-0.7500,1.0000,-1.0000,1.0000),v(-2.7500,-0.7500,-1.0000,-1.0000,0.0000),v(-0.7500,-0.7500,-1.0000,-0.0000,-0.0000),],m["cube3"]),
			n([v(-0.7500,-2.7500,1.0000,0.0000,0.0000),v(-0.7500,-0.7500,1.0000,-0.0000,1.0000),v(-0.7500,-0.7500,-1.0000,-1.0000,1.0000),v(-0.7500,-2.7500,-1.0000,-1.0000,0.0000),],m["cube3"]),
			n([v(-0.7500,-2.7500,-1.0000,0.0000,0.0000),v(-0.7500,-0.7500,-1.0000,-0.0000,1.0000),v(-2.7500,-0.7500,-1.0000,-1.0000,1.0000),v(-2.7500,-2.7500,-1.0000,-1.0000,0.0000),],m["cube3-front"]),
			n([v(-2.7500,-2.7500,-1.0000,0.0000,0.0000),v(-2.7500,-0.7500,-1.0000,0.0000,1.0000),v(-2.7500,-0.7500,1.0000,1.0000,1.0000),v(-2.7500,-2.7500,1.0000,1.0000,0.0000),],m["cube3"]),
			n([v(-0.7500,-0.7500,1.0000,0.0000,0.0000),v(-0.7500,-2.7500,1.0000,0.0000,-1.0000),v(-2.7500,-2.7500,1.0000,-1.0000,-1.0000),v(-2.7500,-0.7500,1.0000,-1.0000,0.0000),],m["cube3"]),
			// Parent mesh: Cube2.
			n([v(2.7500,0.7500,0.9963,0.0000,0.0000),v(2.7500,0.7500,-1.0037,0.0000,-1.0000),v(0.7500,0.7500,-1.0037,-1.0000,-1.0000),v(0.7500,0.7500,0.9963,-1.0000,0.0000),],m["cube2"]),
			n([v(2.7500,2.7500,0.9963,0.0000,1.0000),v(0.7500,2.7500,0.9963,-1.0000,1.0000),v(0.7500,2.7500,-1.0037,-1.0000,0.0000),v(2.7500,2.7500,-1.0037,-0.0000,-0.0000),],m["cube2"]),
			n([v(2.7500,0.7500,0.9963,0.0000,0.0000),v(2.7500,2.7500,0.9963,-0.0000,1.0000),v(2.7500,2.7500,-1.0037,-1.0000,1.0000),v(2.7500,0.7500,-1.0037,-1.0000,0.0000),],m["cube2"]),
			n([v(2.7500,0.7500,-1.0037,0.0000,0.0000),v(2.7500,2.7500,-1.0037,-0.0000,1.0000),v(0.7500,2.7500,-1.0037,-1.0000,1.0000),v(0.7500,0.7500,-1.0037,-1.0000,0.0000),],m["cube2"]),
			n([v(0.7500,0.7500,-1.0037,0.0000,0.0000),v(0.7500,2.7500,-1.0037,0.0000,1.0000),v(0.7500,2.7500,0.9963,1.0000,1.0000),v(0.7500,0.7500,0.9963,1.0000,0.0000),],m["cube2"]),
			n([v(2.7500,2.7500,0.9963,0.0000,0.0000),v(2.7500,0.7500,0.9963,0.0000,-1.0000),v(0.7500,0.7500,0.9963,-1.0000,-1.0000),v(0.7500,2.7500,0.9963,-1.0000,0.0000),],m["cube2"]),
			// Parent mesh: Cube3.
			n([v(-0.7500,0.7500,1.0000,0.0000,0.0000),v(-0.7500,0.7500,-1.0000,0.0000,-1.0000),v(-2.7500,0.7500,-1.0000,-1.0000,-1.0000),v(-2.7500,0.7500,1.0000,-1.0000,0.0000),],m["cube1"]),
			n([v(-0.7500,2.7500,1.0000,0.0000,1.0000),v(-2.7500,2.7500,1.0000,-1.0000,1.0000),v(-2.7500,2.7500,-1.0000,-1.0000,0.0000),v(-0.7500,2.7500,-1.0000,-0.0000,-0.0000),],m["cube1"]),
			n([v(-0.7500,0.7500,1.0000,0.0000,0.0000),v(-0.7500,2.7500,1.0000,-0.0000,1.0000),v(-0.7500,2.7500,-1.0000,-1.0000,1.0000),v(-0.7500,0.7500,-1.0000,-1.0000,0.0000),],m["cube1"]),
			n([v(-0.7500,0.7500,-1.0000,0.0000,0.0000),v(-0.7500,2.7500,-1.0000,-0.0000,1.0000),v(-2.7500,2.7500,-1.0000,-1.0000,1.0000),v(-2.7500,0.7500,-1.0000,-1.0000,0.0000),],m["cube1"]),
			n([v(-2.7500,0.7500,-1.0000,0.0000,0.0000),v(-2.7500,2.7500,-1.0000,0.0000,1.0000),v(-2.7500,2.7500,1.0000,1.0000,1.0000),v(-2.7500,0.7500,1.0000,1.0000,0.0000),],m["cube1"]),
			n([v(-0.7500,2.7500,1.0000,0.0000,0.0000),v(-0.7500,0.7500,1.0000,0.0000,-1.0000),v(-2.7500,0.7500,1.0000,-1.0000,-1.0000),v(-2.7500,2.7500,1.0000,-1.0000,0.0000),],m["cube1"]),
		]);
	}
};
