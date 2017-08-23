### 自定义属性

有两种方式可以直接在xml中设置自定义的属性

```
  <com.demo.MyImage
    android:width=""
    android:height=""
    Text="@string/app_name" //第一种
    app:src="@mipmap/ic_launcher" //第二种
  />
```
第一中方式可以在view中通过下面方法获取属性

```
attrs.getAttributeResourceValue(null,"Text",0)
```

第二中方式需要在values文件夹中创建attrs.xml文件

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <declare-styleable name="MyImage">
        <attr name="src" format="reference"></attr>
    </declare-styleable>
</resources>
```
可以在view'中通过以下方式获取属性
```
TypedArray typedArray = context.obtainStyledAttributes(attrs, R.styleable.MyImage);
int resId = typedArray.getResourceId(R.styleable.MyImage_src, 0);
typedArray.recycle();
```
### 基本操作

1、measure操作

measure方法主要做计算视图大小的操作，子类可以通过重写onMeasure方法实现自己的计算视图大小的方法，通过setMeasuredDimension(width，height)保存计算结果
listview嵌套解决方法，重新计算listview的高度
```
@Override
public void onMeasure(int widthMeasureSpec, intheightMeasureSpec) {
     intexpandSpec = MeasureSpec.makeMeasureSpec(Integer.MAX_VALUE >> 2,
             MeasureSpec.AT_MOST);
     super.onMeasure(widthMeasureSpec, expandSpec);

}

```


2、layout操作

setFrame（l,t,r,b），l,t,r,b即子视图在父视图中的具体位置，该函数用于将这些参数保存起来；
onLayout()，在View中这个函数什么都不会做，提供该函数主要是为viewGroup类型布局子视图用的；
layout操作用于设置视图在屏幕中显示的位置

3、draw操作

onDraw方法绘制背景
