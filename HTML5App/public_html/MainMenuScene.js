
//scene
var Scene_MainScene     = "Resources/EWProto.json";
var Scene_BG     = "Resources/HelloWorld.png";

//preload
var Scene_resources =
[
    {src:Scene_BG},
    //json
    {src:Scene_MainScene}
];

//scene: main menu.
var MainMenuScene = cc.Scene.extend({
    userService: null,
    onEnter: function()
    {
        this._super();

        //add cocostudio scene to game
        var gameSceneNode = ccs.SceneReader.getInstance().createNodeWithSceneFile(Scene_MainScene);
                
        //var tex = cc.TextureCache.getInstance().addImage("http://www.corsproxy.com/" + item.url.replace("http://",""));
        //panel.getChildByName("ItemImage").loadTexture(tex);
              
        var size = cc.Director.getInstance().getWinSize();
              
        //var sprite = cc.Sprite.create("http://cdn.shephertz.com/repository/files/eb075343180ff254993d760eaeff219d9c6f3cd768c976f4cb7c25e6a6a7a88e/8e8984598d28645d304057d9a59cfd28e4648a60/ee227a6df135380c8bb1c4e9ad071c07e1fe284a.png");
        var sprite = cc.Sprite.create("http://www.corsproxy.com/cdn.shephertz.com/repository/files/eb075343180ff254993d760eaeff219d9c6f3cd768c976f4cb7c25e6a6a7a88e/8e8984598d28645d304057d9a59cfd28e4648a60/ee227a6df135380c8bb1c4e9ad071c07e1fe284a.png");

        var spritelocal = cc.Sprite.create("Resources/Key_3.png");

        
        sprite.setPosition(cc.p(100,100));
        spritelocal.setPosition(cc.p(size.width-100,100));
        
        gameSceneNode.addChild(spritelocal,2);
        gameSceneNode.addChild(sprite,3);

        this.addChild(gameSceneNode);
    }
});
