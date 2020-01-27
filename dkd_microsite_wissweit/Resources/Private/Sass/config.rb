project_type = :stand_alone
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "../../Public/Css"
sass_dir = "./"
images_dir = "../../../../dkd_fuas/Resources/Public/Images"
fonts_dir = "../../../../dkd_fuas/Resources/Public/Fonts"
#output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

sass_options = { :debug_info => false }

# This file was loaded before extensions was loaded.
# So must define configuration option here.
Compass::Configuration.add_configuration_property(:additional_watch_paths) do
  ['../../../../dkd_fuas/Resources/Private/Sass']
end
