//scene
var Scene_GameScene     = "Resources/EwProto.json";
var Scene_BG     = "Resources/HelloWorld.png";

//preload
var GameScene_resources =
[
    {src:Scene_BG},
    //json
    {src:Scene_GameScene}
];

//scene: game scene.
var GameScene = cc.Scene.extend
({
    onEnter:function ()
    {
        this._super();
    },
    init:function()
    {
        GameScene.Scene = this;
    },
    //tick: update all action of per-node in per-frame.
    update:function(dt)
    {
    }
});

GameScene.Scene = null;
GameScene.getScene = function()
{
    return this.Scene;
}