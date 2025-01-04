import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as s,a as e,b as i,d as l,f as r}from"./app-CtvCwAmI.js";const c={},o={href:"https://www.jianshu.com/p/f33988197f60",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/c86dce5a70b0",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/a4022db636d5",target:"_blank",rel:"noopener noreferrer"},m=r(`<h4 id="makefile前言" tabindex="-1"><a class="header-anchor" href="#makefile前言"><span>makefile前言</span></a></h4><p>我写过makefile，编写过简单makefile框架, 但是cmake比较简单一些。 原理简单 编写输入：环境变量，cpp, c，h文件 编写输出：lib, so, bin (即静态库，动态库，二进制执行文件)</p><p>cmake官网</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://cmake.org/cmake/help/latest/guide/tutorial/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####常用方法</p><ul><li>set 设置变量</li><li>include_directories 将头文件添加到搜索路径中</li><li>aux_source_directory 当前目录所有源文件保存到指定变量</li><li>add_subdirectory 添加子目录</li><li>add_library 指定要编译的库</li><li>add_executable 生成执行文件</li><li>target_link_libraries 将库链接</li><li>add_test 测试工具</li></ul><p>####模板式编写cmake #####1、创建CMakeLists.txt</p><ul><li>1、生成执行程序</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 指定 CMake 使用版本
cmake_minimum_required(VERSION 3.6)
# 工程名
project(hello)
#设置变量
set(SRC_LIST hello.cpp)
# 编译可执行文件
add_executable(helloBin \${SRC_LIST} )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2、生成静态库</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>project(hello)
set(LIB_SRC hello.cpp)
add_library(libhello STATIC \${LIB_SRC})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标准模板写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 查找当前目录下的所有源文件
# 并将名称保存到 DIR_LIB_SRCS 变量
aux_source_directory(. DIR_LIB_SRCS)

#当前文件夹名称 便于生成模板代码
STRING( REGEX REPLACE &quot;.*/(.*)&quot; &quot;\\1&quot; CURRENT_FOLDER \${CMAKE_CURRENT_SOURCE_DIR} )
set(TARGET \${CURRENT_FOLDER})

# 指定生成 TARGET 静态库
add_library (\${TARGET} \${DIR_LIB_SRCS})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、生成动态库</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>project(HELLO)
set(LIB_SRC hello.c)
add_library(dllhello SHARED \${LIB_SRC}）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####2、引入cmake环境变量及编译 环境变量</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#引入环境变量 cmake
vi .bash_profile

#cmake
export PATH=$PATH:/Users/chentong/Android/sdk/cmake/3.6.4111459/bin
wq保存

source .bash_profile //环境变量生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译 示例在demo1中</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cmake  CMakeLists.txt  //编译cmake文件
make //编译
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yingzi:demo1 chentong$ cmake CMakeLists.txt 
-- The C compiler identification is AppleClang 11.0.0.11000033
-- The CXX compiler identification is AppleClang 11.0.0.11000033
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++
-- Check for working CXX compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done
-- Generating done
-- Build files have been written to: /Users/chentong/Android/taixin/HowToLearnNdk/demo1

yingzi:demo1 chentong$ make 
Scanning dependencies of target helloBin
[ 50%] Building CXX object CMakeFiles/helloBin.dir/hello.cpp.o
[100%] Linking CXX executable helloBin
[100%] Built target helloBin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cmake 打印</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>message(&quot;hello&quot;)
message(&quot;\${PROJECT_SOURCE_DIR}&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cmake option选项开关 cmake -DUSE_HELLO=OFF CMakeLists.txt 用命令来调节</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 是否使用自己的 hello 库  --option开关选项
option (USE_HELLO &quot;Use provided hello implementation&quot; ON)
# 是否加入 hello 库
if (USE_HELLO)
  include_directories (&quot;\${PROJECT_SOURCE_DIR}/hello&quot;)
  add_subdirectory (hello)
  set (HELLO_LIBS hello)
endif (USE_HELLO)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取当前文件夹名 作为当前项目TARGET，便于生成模板代码</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//当前目录完整路径
message(\${CMAKE_CURRENT_SOURCE_DIR})
STRING( REGEX REPLACE &quot;.*/(.*)&quot; &quot;\\1&quot; CURRENT_FOLDER \${CMAKE_CURRENT_SOURCE_DIR} )
//当前文件
message(\${CURRENT_FOLDER})
set(TARGET \${CURRENT_FOLDER})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装 默认安装到 /usr/local/下面 命令 make install</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>install (TARGETS \${TARGET} DESTINATION lib)
install (FILES cmath.h DESTINATION include)
install (TARGETS \${MAIN_BIN} DESTINATION bin)
install (FILES &quot;\${PROJECT_BINARY_DIR}/config.h&quot; DESTINATION include)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试 推荐定义一个宏，用来简化测试工作</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#定义二进制文件变量
set (MAIN_BIN mainBin)

# 启用测试
enable_testing()

# 测试程序是否成功运行
#语法 add_test(flag , bin ,arg1,arg2...) eg 1:
add_test (test_demo \${MAIN_BIN} 5 2)

# 测试帮助信息是否可以正常提示
add_test (test_usage \${MAIN_BIN})
set_tests_properties (test_usage PROPERTIES PASS_REGULAR_EXPRESSION &quot;Usage: .* base exponent&quot;)

# 测试 5 的平方 为 25
add_test (test_5_2 \${MAIN_BIN} 5 2)
set_tests_properties (test_5_2 PROPERTIES PASS_REGULAR_EXPRESSION &quot;is 25&quot;)

# 定义一个宏，用来简化测试工作  测试函数 抽象工作
macro (do_test arg1 arg2 result)
  add_test (do_test_\${arg1}_\${arg2} \${MAIN_BIN} \${arg1} \${arg2})
  set_tests_properties (do_test_\${arg1}_\${arg2} PROPERTIES PASS_REGULAR_EXPRESSION \${result})
endmacro (do_test)

# 利用 do_test 宏，测试一系列数据,起到简化效果
do_test (2 10 &quot;is 1024&quot;)
do_test (3 3 &quot;is 27&quot;)
do_test (8 2 &quot;is 64&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件改动，测试前，必须先make编译 ,再ctest 输出结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yingzi:demo5 chentong$ make test 
Running tests...
Test project /Users/chentong/Android/taixin/HowToLearnNdk/cmake-demo/demo5
    Start 1: test_demo
1/6 Test #1: test_demo ........................   Passed    0.00 sec
    Start 2: test_usage
2/6 Test #2: test_usage .......................   Passed    0.00 sec
    Start 3: test_5_2
3/6 Test #3: test_5_2 .........................   Passed    0.00 sec
    Start 4: do_test_2_10
4/6 Test #4: do_test_2_10 .....................   Passed    0.00 sec
    Start 5: do_test_3_3
5/6 Test #5: do_test_3_3 ......................   Passed    0.00 sec
    Start 6: do_test_8_2
6/6 Test #6: do_test_8_2 ......................   Passed    0.00 sec

100% tests passed, 0 tests failed out of 6

Total Test time (real) =   0.02 sec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>支持gdb</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>set(CMAKE_BUILD_TYPE &quot;Debug&quot;)
set(CMAKE_CXX_FLAGS_DEBUG &quot;$ENV{CXXFLAGS} -O0 -Wall -g -ggdb&quot;)
set(CMAKE_CXX_FLAGS_RELEASE &quot;$ENV{CXXFLAGS} -O3 -Wall&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查系统是否有指定函数</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 检查系统是否支持 pow 函数
include (\${CMAKE_ROOT}/Modules/CheckFunctionExists.cmake)
check_function_exists (pow HAVE_POW)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加版本号</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>set (Demo_VERSION_MAJOR 1)
set (Demo_VERSION_MINOR 0)

# 加入一个配置头文件，用于处理 CMake 对源码的设置
configure_file (
  &quot;\${PROJECT_SOURCE_DIR}/config.h.in&quot;
  &quot;\${PROJECT_BINARY_DIR}/config.h&quot;
  )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config.h.in</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#define Demo_VERSION_MAJOR @Demo_VERSION_MAJOR@
#define Demo_VERSION_MINOR @Demo_VERSION_MINOR@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>main.cpp</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>int main(int argc, char *argv[])
{
    printf(&quot;%s Version %d.%d
&quot;,
            argv[0],
            Demo_VERSION_MAJOR,
            Demo_VERSION_MINOR);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>cpack 打包</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 构建一个 CPack 安装包
include (InstallRequiredSystemLibraries)
# License授权
set (CPACK_RESOURCE_FILE_LICENSE &quot;\${CMAKE_CURRENT_SOURCE_DIR}/License.txt&quot;)
set (CPACK_PACKAGE_VERSION_MAJOR &quot;\${Demo_VERSION_MAJOR}&quot;)
set (CPACK_PACKAGE_VERSION_MINOR &quot;\${Demo_VERSION_MINOR}&quot;)
include (CPack)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cpack命令</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#生成二进制安装包：
cpack -C CPackConfig.cmake
#生成源码安装包
cpack -C CPackSourceConfig.cmake
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开源代码示例 https://github.com/yinlingchaoliu/HowToLearnNdk</p><p>####参考范例 CMake 入门实战 http://www.hahack.com/codes/cmake/ 源代码 https://github.com/wzpan/cmake-demo</p>`,49);function b(p,_){const n=a("ExternalLinkIcon");return d(),s("div",null,[e("p",null,[i("####目录 "),e("a",o,[i("cmake快速实战"),l(n)])]),e("p",null,[e("a",u,[i("Android JNI基础知识讲解"),l(n)])]),e("p",null,[e("a",v,[i("Android JNI实战"),l(n)])]),m])}const x=t(c,[["render",b],["__file","cmake快速实战.html.vue"]]),E=JSON.parse('{"path":"/fe/android/%E5%A6%82%E4%BD%95%E5%AD%A6%E4%B9%A0ndk/cmake%E5%BF%AB%E9%80%9F%E5%AE%9E%E6%88%98.html","title":"cmake快速实战","lang":"zh-CN","frontmatter":{"title":"cmake快速实战","date":"2024-03-24T11:47:50.000Z","category":["如何学习ndk"],"tag":["archive"],"description":"####目录 cmake快速实战 Android JNI基础知识讲解 Android JNI实战 makefile前言 我写过makefile，编写过简单makefile框架, 但是cmake比较简单一些。 原理简单 编写输入：环境变量，cpp, c，h文件 编写输出：lib, so, bin (即静态库，动态库，二进制执行文件) cmake官网 ##...","head":[["meta",{"property":"og:url","content":"https://yinlingchaoliu.github.io/fe/android/%E5%A6%82%E4%BD%95%E5%AD%A6%E4%B9%A0ndk/cmake%E5%BF%AB%E9%80%9F%E5%AE%9E%E6%88%98.html"}],["meta",{"property":"og:site_name","content":"引领潮流"}],["meta",{"property":"og:title","content":"cmake快速实战"}],["meta",{"property":"og:description","content":"####目录 cmake快速实战 Android JNI基础知识讲解 Android JNI实战 makefile前言 我写过makefile，编写过简单makefile框架, 但是cmake比较简单一些。 原理简单 编写输入：环境变量，cpp, c，h文件 编写输出：lib, so, bin (即静态库，动态库，二进制执行文件) cmake官网 ##..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T14:17:18.000Z"}],["meta",{"property":"article:author","content":"引领潮流"}],["meta",{"property":"article:tag","content":"archive"}],["meta",{"property":"article:published_time","content":"2024-03-24T11:47:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T14:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cmake快速实战\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-24T11:47:50.000Z\\",\\"dateModified\\":\\"2024-03-25T14:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"引领潮流\\",\\"url\\":\\"https://www.jianshu.com/u/bdcce32c05dd\\"}]}"]]},"headers":[],"git":{"createdTime":1711376238000,"updatedTime":1711376238000,"contributors":[{"name":"引领潮流","email":"heat13@qq.com","commits":1}]},"readingTime":{"minutes":3.79,"words":1138},"filePathRelative":"fe/android/如何学习ndk/cmake快速实战.md","localizedDate":"2024年3月24日","excerpt":"<p>####目录\\n<a href=\\"https://www.jianshu.com/p/f33988197f60\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">cmake快速实战</a></p>\\n<p><a href=\\"https://www.jianshu.com/p/c86dce5a70b0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Android JNI基础知识讲解</a></p>\\n<p><a href=\\"https://www.jianshu.com/p/a4022db636d5\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Android JNI实战</a></p>","autoDesc":true}');export{x as comp,E as data};
