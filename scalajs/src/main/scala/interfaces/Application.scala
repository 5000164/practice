package interfaces

import scala.scalajs.js

object Application {
  def main(args: Array[String]): Unit = {
    println(js.Dynamic.global.window.location.origin)
  }
}
