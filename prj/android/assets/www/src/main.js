var stats, canvas, engine, scene, assetsManager;

function main()
{
	stats = document.getElementById("stats");
	canvas = document.getElementById("renderCanvas");

	engine = new BABYLON.Engine(canvas, true);
	engine.loadingUIText = "Loading...";
	engine.displayLoadingUI();

	scene = createPBRTestScene();
	// Register a render loop to repeatedly render the scene
	engine.hideLoadingUI();
	engine.runRenderLoop(function () {scene.render(); stats.textContent= "FPS:" + (engine.fps|0);});

	window.addEventListener('resize', function() {
    	engine.resize();
	});

	/*BABYLON.SceneLoader.Load("", "assets/DemoScene.unity.babylon", engine, function (newScene) {
	            // Wait for textures and shaders to be ready
	            newScene.executeWhenReady(function () {
	                // Attach camera to canvas inputs
	                newScene.activeCamera.attachControl(canvas);

					engine.hideLoadingUI();

	                // Once the scene is loaded, just register a render loop to render it
	                engine.runRenderLoop(function() {
	                    newScene.render();
						stats.textContent= "FPS:" + (engine.fps|0);
	                });
	            });
			});*/
}
