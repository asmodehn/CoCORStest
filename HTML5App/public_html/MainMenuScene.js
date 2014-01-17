//scene: main menu.
var MainMenuScene = cc.Scene.extend({
    userService: null,
    onEnter: function()
    {
        this._super();

        //add cocostudio scene to game
        var gameSceneNode = ccs.SceneReader.getInstance().createNodeWithSceneFile(Scene_GameScene);
        this.addChild(gameSceneNode);

        
    }
});
