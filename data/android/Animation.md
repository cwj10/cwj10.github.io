## Android动画
- Property animation    
  改变对象属性的一种动画模式，例如背景色、透明度等。文件位于 res/animator/filename.xml文件夹下。相关java类有ValueAnimator, ObjectAnimator, or AnimatorSet。    
  RESOURCE REFERENCE:    
  In Java: R.animator.filename    
  In XML: @[package:]animator/filename    

  SYNTAX:    
  ```
  <set
    android:ordering=["together" | "sequentially"]>
    <!-- ordering播放顺序 -->
    <objectAnimator
        android:propertyName="string"
        android:duration="int"
        android:valueFrom="float | int | color"
        android:valueTo="float | int | color"
        android:startOffset="int"
        android:repeatCount="int"
        android:repeatMode=["repeat" | "reverse"]
        android:valueType=["intType" | "floatType"]/>

    <animator
        android:duration="int"
        android:valueFrom="float | int | color"
        android:valueTo="float | int | color"
        android:startOffset="int"
        android:repeatCount="int"
        android:repeatMode=["repeat" | "reverse"]
        android:valueType=["intType" | "floatType"]/>

    <set>
        ...
    </set>
  </set>
  ```
  文件必须有一个跟节点，可以是<set>, <objectAnimator>,<valueAnimator>。分别对应AnimatorSet 、ObjectAnimator、ValueAnimator。

  ```
  AnimatorSet set = (AnimatorSet) AnimatorInflater.loadAnimator(myContext,
      R.animator.property_animator);
  set.setTarget(myObject);
  set.start();

  ```

- ViewAnimation    
*Tween补间动画*    
SYNTAX:    
  ```
  <?xml version="1.0" encoding="utf-8"?>
  <set xmlns:android="http://schemas.android.com/apk/res/android"
    android:interpolator="@[package:]anim/interpolator_resource"
    android:shareInterpolator=["true" | "false"] >
    <alpha
        android:fromAlpha="float"
        android:toAlpha="float" />
    <scale
        android:fromXScale="float"
        android:toXScale="float"
        android:fromYScale="float"
        android:toYScale="float"
        android:pivotX="float"
        android:pivotY="float" />
    <translate
        android:fromXDelta="float"
        android:toXDelta="float"
        android:fromYDelta="float"
        android:toYDelta="float" />
    <rotate
        android:fromDegrees="float"
        android:toDegrees="float"
        android:pivotX="float"
        android:pivotY="float" />
    <set>
        ...
    </set>
  </set>
  ```
  ```
    ImageView image = (ImageView) findViewById(R.id.image);
    Animation hyperspaceJump = AnimationUtils.loadAnimation(this, R.anim.hyperspace_jump);
    image.startAnimation(hyperspaceJump);
  ```
*Frame帧动画*
常用java类AnimationDrawable.
SYNTAX:    
  ```
    <?xml version="1.0" encoding="utf-8"?>
    <animation-list xmlns:android="http://schemas.android.com/apk/res/android"
        android:oneshot=["true" | "false"] >
    <!--oneshot true 一次播放，false循环  -->
        <item
            android:drawable="@[package:]drawable/drawable_resource_name"
            android:duration="integer" />
    </animation-list>
  ```
一般设置为view的background    
  ```
  ImageView rocketImage = (ImageView) findViewById(R.id.rocket_image);
  rocketImage.setBackgroundResource(R.drawable.rocket_thrust);

  rocketAnimation = (AnimationDrawable) rocketImage.getBackground();
  rocketAnimation.start();

  ```
