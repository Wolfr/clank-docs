---
  layout: post
  title: CSS encapsulation
  date: 2013-06-16 12:26:00 GMT+1
---

I want to talk a bit about <a href="https://github.com/Wolfr/clank/issues/24">Issue #24</a> which is that the stylesheet of the documentation clashes with the sylesheet of Clank itself.

If you look at the <a href="http://getclank.com/demos/">demos</a> you'll see a device you can manipulate using the form elements on top. You can change the device type, size and orientation.

I want the styles within this device frame to be independent of the rest of the page. The device frame (e.g. an iPhone) should load the Clank styles, within the documentation page, yet *not* conflict with the documentation styles.

See, in Clank there are CSS styles (applied to all clank components):

{% highlight scss %}
p {
  font-size: 14px;
  color: #333;
}
{% endhighlight %}

But then in the docs there are also styles

{% highlight scss %}
p {
  font-size: 15px; /* Some other font size */
  color: #555; /* Some other color */
}
{% endhighlight %}

I want the styles of to be separate; then work with the page DOM as a whole.

The simplest solution is to scope everything manually like this:

{% highlight scss %}
.cl-docs p {
  font-size: 14px;
  color: #333;
}
.cl p {
  font-size: 15px; /* Some other font size */
  color: #555; /* Some other color */
}
{% endhighlight %}

However, this leads to a lot of unnecessary CSS. The fact that there are docs is irrelevant to people using Clank. Especially on mobile we want to keep the file size as low as possible.

I could solve this problem using an `<iframe>` but that feels a bit messy. I won't be able to access whatever is inside the iframe.

Why do I need access to the contents of the frame? Well, for example, I want to change up the DOM from my host page to show animations between screens (similar to the animations in <a href="http://maker.github.io/ratchet/">Ratchet</a>). I don't want "full encapsulation". I just want my styles to be encapsulated.

I experimented a bit with scoped stylesheets and iframes but these are not real solutions. I wrote everything up on this <a href="https://github.com/Wolfr/css-encapsulation-today">Github repo</a> in hopes of finding a solution.

Now I'm thinking my solution is using web components. In this Google I/O video, the concept of web components is explained very well. It's worth a watch because this *is* the future of the web.

<div class="video-wrapper">
  <iframe width="600" height="400" frameborder="none" src="http://www.youtube.com/embed/0g0oOOT86NY" allowfullscreen="allowfullscreen="> </iframe>
</div>

I'm documenting this as I go along because the future of the web depends on use cases. If anyone has thoughts/suggestions/ideas, leave a comment!