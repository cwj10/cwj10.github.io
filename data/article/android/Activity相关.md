### Activity的生命周期
- 从Activity A进入Activity B,再按返回键时生命周期的变化：    
`A onPause` -> `B onCreate` -> `B onStart` -> `B onResume` -> `A onStop`    
`B onPause` -> `A onRestar`t -> `A onStart` -> `A onResume` -> `B on Stop` -> `B onDestor`

- 横竖屏切换时候activity的生命周期    
1、不设置Activity的`android:configChanges`时，切屏会重新调用各个生命周期，切横竖屏时都会执行    
2、设置Activity的`android:configChanges="orientation"`时，切屏只会执行一次生命周期    
3、设置Activity的`android:configChanges="orientation|keyboardHidden|screenSize"`是，不会重新调用各个生命周期（在miniSdkVersion和 targetSdkVersion属性小于13的情况下，可以不加screenSize）    

- 由Activity A进入Activity B时，B的onResume会在A的onPause后执行，因此不要在onPause中执行耗时操作，使得新Activity尽快显示出来并切换到前台

### Activity的启动模式

Activity有四种启动模式standard、singleTop、singleTask、singleInstance。

- standard:标准模式，这也是系统的默认模式。每次启动一个Activity都会重新创建一个实例，不管这实例是否已经存在，被启动的Activity会运行在启动它的那个Activity栈。_当我们用 ApplicationContext 去启动standard模式的Activity时会报错，需要指定`FLAG_ACTIVITY_NEW_TASK`标记位。_
- singleTop:栈顶复用模式。如果新Activity已经位于任务栈顶，那么Activity不会被重新创建，同时它的`onNewIntent`方法会被调用。
- singleTask：栈内复用模式。只要Activity在一个栈中存在，那么多次启动此Activity都不会创建新的实例，也会调用`onNewIntent`方法，会导致所有在这个Activity之上的Activity全部出栈。
- singleInstance:单实例模式。不允许其他Activity和它在同一个task，它启动新的Activity时，会在不同的task中。

